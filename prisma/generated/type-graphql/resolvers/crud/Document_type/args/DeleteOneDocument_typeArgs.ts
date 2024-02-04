import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeWhereUniqueInput } from "../../../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;
}
