import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeCreateInput } from "../../../inputs/Delivery_timeCreateInput";
import { Delivery_timeUpdateInput } from "../../../inputs/Delivery_timeUpdateInput";
import { Delivery_timeWhereUniqueInput } from "../../../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDelivery_timeArgs {
  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_timeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_timeCreateInput, {
    nullable: false
  })
  create!: Delivery_timeCreateInput;

  @TypeGraphQL.Field(_type => Delivery_timeUpdateInput, {
    nullable: false
  })
  update!: Delivery_timeUpdateInput;
}
