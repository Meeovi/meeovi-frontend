import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsCreateInput } from "../../../inputs/Directus_collectionsCreateInput";
import { Directus_collectionsUpdateInput } from "../../../inputs/Directus_collectionsUpdateInput";
import { Directus_collectionsWhereUniqueInput } from "../../../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_collectionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateInput, {
    nullable: false
  })
  create!: Directus_collectionsCreateInput;

  @TypeGraphQL.Field(_type => Directus_collectionsUpdateInput, {
    nullable: false
  })
  update!: Directus_collectionsUpdateInput;
}
