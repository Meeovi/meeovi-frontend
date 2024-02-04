import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeUpdateInput } from "../../../inputs/Delivery_timeUpdateInput";
import { Delivery_timeWhereUniqueInput } from "../../../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDelivery_timeArgs {
  @TypeGraphQL.Field(_type => Delivery_timeUpdateInput, {
    nullable: false
  })
  data!: Delivery_timeUpdateInput;

  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_timeWhereUniqueInput;
}
