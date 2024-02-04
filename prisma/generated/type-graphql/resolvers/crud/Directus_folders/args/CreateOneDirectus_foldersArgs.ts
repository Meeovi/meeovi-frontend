import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersCreateInput } from "../../../inputs/Directus_foldersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersCreateInput, {
    nullable: false
  })
  data!: Directus_foldersCreateInput;
}
