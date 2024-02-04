import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationOrderByRelevanceFieldEnum } from "../../enums/Custom_field_set_relationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_field_set_relationOrderByRelevanceInput", {})
export class Custom_field_set_relationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "entity_name"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
