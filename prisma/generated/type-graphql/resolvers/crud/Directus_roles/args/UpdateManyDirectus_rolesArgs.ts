import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_rolesUpdateManyMutationInput } from "../../../inputs/Directus_rolesUpdateManyMutationInput";
import { Directus_rolesWhereInput } from "../../../inputs/Directus_rolesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_rolesArgs {
  @TypeGraphQL.Field(_type => Directus_rolesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_rolesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  where?: Directus_rolesWhereInput | undefined;
}
