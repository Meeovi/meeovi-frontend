import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_usersUpdateManyMutationInput } from "../../../inputs/Directus_usersUpdateManyMutationInput";
import { Directus_usersWhereInput } from "../../../inputs/Directus_usersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_usersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_usersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;
}
