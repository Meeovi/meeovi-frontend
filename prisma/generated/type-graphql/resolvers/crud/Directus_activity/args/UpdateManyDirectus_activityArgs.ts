import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityUpdateManyMutationInput } from "../../../inputs/Directus_activityUpdateManyMutationInput";
import { Directus_activityWhereInput } from "../../../inputs/Directus_activityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_activityArgs {
  @TypeGraphQL.Field(_type => Directus_activityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_activityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_activityWhereInput, {
    nullable: true
  })
  where?: Directus_activityWhereInput | undefined;
}
