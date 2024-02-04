import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsCreateInput } from "../../../inputs/Directus_flowsCreateInput";
import { Directus_flowsUpdateInput } from "../../../inputs/Directus_flowsUpdateInput";
import { Directus_flowsWhereUniqueInput } from "../../../inputs/Directus_flowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_flowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_flowsCreateInput, {
    nullable: false
  })
  create!: Directus_flowsCreateInput;

  @TypeGraphQL.Field(_type => Directus_flowsUpdateInput, {
    nullable: false
  })
  update!: Directus_flowsUpdateInput;
}
