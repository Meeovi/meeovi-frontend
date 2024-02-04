import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_methodOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Shipping_methodOrderByWithRelationAndSearchRelevanceInput";
import { Shipping_methodWhereInput } from "../../../inputs/Shipping_methodWhereInput";
import { Shipping_methodWhereUniqueInput } from "../../../inputs/Shipping_methodWhereUniqueInput";
import { Shipping_methodScalarFieldEnum } from "../../../../enums/Shipping_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Delivery_timeShipping_methodArgs {
  @TypeGraphQL.Field(_type => Shipping_methodWhereInput, {
    nullable: true
  })
  where?: Shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_methodOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Shipping_methodOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodWhereUniqueInput, {
    nullable: true
  })
  cursor?: Shipping_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Shipping_methodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "active" | "position" | "availability_rule_id" | "media_id" | "delivery_time_id" | "tax_type" | "tax_id" | "created_at" | "updated_at" | "technical_name"> | undefined;
}
