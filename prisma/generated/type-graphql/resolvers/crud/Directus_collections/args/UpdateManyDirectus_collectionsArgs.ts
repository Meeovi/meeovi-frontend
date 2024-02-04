import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_collectionsUpdateManyMutationInput } from "../../../inputs/Directus_collectionsUpdateManyMutationInput";
import { Directus_collectionsWhereInput } from "../../../inputs/Directus_collectionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_collectionsArgs {
  @TypeGraphQL.Field(_type => Directus_collectionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_collectionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_collectionsWhereInput, {
    nullable: true
  })
  where?: Directus_collectionsWhereInput | undefined;
}
