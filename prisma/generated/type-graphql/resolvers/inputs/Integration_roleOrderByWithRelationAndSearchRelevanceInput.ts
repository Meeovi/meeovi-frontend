import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Acl_roleOrderByWithRelationAndSearchRelevanceInput";
import { IntegrationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/IntegrationOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Integration_roleOrderByWithRelationAndSearchRelevanceInput", {})
export class Integration_roleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  acl_role_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Acl_roleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  acl_role?: Acl_roleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  integration?: IntegrationOrderByWithRelationAndSearchRelevanceInput | undefined;
}
