import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationWhereUniqueInput } from "../../../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Document_type_translationWhereUniqueInput;
}
