import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeWhereInput } from "../../../inputs/Document_typeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;
}
