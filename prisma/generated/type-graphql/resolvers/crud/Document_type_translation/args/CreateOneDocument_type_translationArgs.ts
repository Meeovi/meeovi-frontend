import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationCreateInput } from "../../../inputs/Document_type_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationCreateInput, {
    nullable: false
  })
  data!: Document_type_translationCreateInput;
}
