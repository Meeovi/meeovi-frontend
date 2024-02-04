import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeOrderByRelevanceFieldEnum } from "../../enums/Mail_template_typeOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_typeOrderByRelevanceInput", {})
export class Mail_template_typeOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Mail_template_typeOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"technical_name" | "available_entities" | "template_data">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
