import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsUpdateInput } from "../../../inputs/Directus_collectionsUpdateInput";
import { Directus_collectionsWhereUniqueInput } from "../../../inputs/Directus_collectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsUpdateInput, {
    nullable: false
  })
  data!: Directus_collectionsUpdateInput;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_collectionsWhereUniqueInput;
}
