import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesCountOrderByAggregateInput } from "../inputs/Directus_rolesCountOrderByAggregateInput";
import { Directus_rolesMaxOrderByAggregateInput } from "../inputs/Directus_rolesMaxOrderByAggregateInput";
import { Directus_rolesMinOrderByAggregateInput } from "../inputs/Directus_rolesMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Directus_rolesOrderByWithAggregationInput", {})
export class Directus_rolesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  ip_access?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enforce_tfa?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin_access?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_access?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Directus_rolesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Directus_rolesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Directus_rolesMinOrderByAggregateInput | undefined;
}
