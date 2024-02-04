import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationWhereInput } from "../../../inputs/Document_type_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  where?: Document_type_translationWhereInput | undefined;
}
