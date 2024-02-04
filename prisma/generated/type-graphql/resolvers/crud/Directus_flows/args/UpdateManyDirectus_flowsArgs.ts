import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsUpdateManyMutationInput } from "../../../inputs/Directus_flowsUpdateManyMutationInput";
import { Directus_flowsWhereInput } from "../../../inputs/Directus_flowsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_flowsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_flowsWhereInput, {
    nullable: true
  })
  where?: Directus_flowsWhereInput | undefined;
}
