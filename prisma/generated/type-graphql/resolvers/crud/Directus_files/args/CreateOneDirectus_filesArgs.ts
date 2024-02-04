import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesCreateInput } from "../../../inputs/Directus_filesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesCreateInput, {
    nullable: false
  })
  data!: Directus_filesCreateInput;
}
