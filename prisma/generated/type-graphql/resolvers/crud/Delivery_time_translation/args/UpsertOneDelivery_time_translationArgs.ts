import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationCreateInput } from "../../../inputs/Delivery_time_translationCreateInput";
import { Delivery_time_translationUpdateInput } from "../../../inputs/Delivery_time_translationUpdateInput";
import { Delivery_time_translationWhereUniqueInput } from "../../../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateInput, {
    nullable: false
  })
  create!: Delivery_time_translationCreateInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateInput, {
    nullable: false
  })
  update!: Delivery_time_translationUpdateInput;
}
