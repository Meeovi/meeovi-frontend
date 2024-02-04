import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_flowsUpdateInput } from "../../../inputs/Directus_flowsUpdateInput";
import { Directus_flowsWhereUniqueInput } from "../../../inputs/Directus_flowsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_flowsArgs {
  @TypeGraphQL.Field(_type => Directus_flowsUpdateInput, {
    nullable: false
  })
  data!: Directus_flowsUpdateInput;

  @TypeGraphQL.Field(_type => Directus_flowsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_flowsWhereUniqueInput;
}
