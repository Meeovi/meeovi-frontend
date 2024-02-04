import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationWhereUniqueInput } from "../../../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;
}
