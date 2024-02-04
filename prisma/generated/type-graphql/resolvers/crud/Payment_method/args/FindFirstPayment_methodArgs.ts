import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { Payment_methodWhereInput } from "../../../inputs/Payment_methodWhereInput";
import { Payment_methodWhereUniqueInput } from "../../../inputs/Payment_methodWhereUniqueInput";
import { Payment_methodScalarFieldEnum } from "../../../../enums/Payment_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Payment_methodOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: true
  })
  cursor?: Payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "handler_identifier" | "position" | "active" | "after_order_enabled" | "availability_rule_id" | "plugin_id" | "media_id" | "created_at" | "updated_at" | "technical_name"> | undefined;
}
