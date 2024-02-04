import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeWhereUniqueInput } from "../../../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDelivery_timeOrThrowArgs {
  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_timeWhereUniqueInput;
}
