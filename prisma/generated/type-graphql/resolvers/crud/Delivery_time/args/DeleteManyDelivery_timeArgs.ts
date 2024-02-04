import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeWhereInput } from "../../../inputs/Delivery_timeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDelivery_timeArgs {
  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;
}
