import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_order_extensionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Klarna_order_extensionOrderByWithRelationAndSearchRelevanceInput";
import { Klarna_order_extensionWhereInput } from "../../../inputs/Klarna_order_extensionWhereInput";
import { Klarna_order_extensionWhereUniqueInput } from "../../../inputs/Klarna_order_extensionWhereUniqueInput";
import { Klarna_order_extensionScalarFieldEnum } from "../../../../enums/Klarna_order_extensionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstKlarna_order_extensionOrThrowArgs {
  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereInput, {
    nullable: true
  })
  where?: Klarna_order_extensionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Klarna_order_extensionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Klarna_order_extensionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "order_id" | "order_version_id" | "order_address_hash" | "order_cart_hash" | "order_cart_hash_version" | "created_at" | "updated_at"> | undefined;
}
