import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Delivery_timeOrderByWithRelationAndSearchRelevanceInput";
import { Delivery_timeWhereInput } from "../../../inputs/Delivery_timeWhereInput";
import { Delivery_timeWhereUniqueInput } from "../../../inputs/Delivery_timeWhereUniqueInput";
import { Delivery_timeScalarFieldEnum } from "../../../../enums/Delivery_timeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDelivery_timeOrThrowArgs {
  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Delivery_timeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Delivery_timeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "min" | "max" | "unit" | "created_at" | "updated_at"> | undefined;
}
