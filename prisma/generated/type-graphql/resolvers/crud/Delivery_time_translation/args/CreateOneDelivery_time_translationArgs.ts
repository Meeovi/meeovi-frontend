import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationCreateInput } from "../../../inputs/Delivery_time_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationCreateInput, {
    nullable: false
  })
  data!: Delivery_time_translationCreateInput;
}
