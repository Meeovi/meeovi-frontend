import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageOrderByRelevanceFieldEnum } from "../../enums/Dead_messageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Dead_messageOrderByRelevanceInput", {})
export class Dead_messageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Dead_messageOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"original_message_class" | "handler_class" | "exception" | "exception_message" | "exception_file">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
