import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeCreateInput } from "../../../inputs/Delivery_timeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDelivery_timeArgs {
  @TypeGraphQL.Field(_type => Delivery_timeCreateInput, {
    nullable: false
  })
  data!: Delivery_timeCreateInput;
}
