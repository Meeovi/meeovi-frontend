import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeCreateManyInput } from "../../../inputs/Delivery_timeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDelivery_timeArgs {
  @TypeGraphQL.Field(_type => [Delivery_timeCreateManyInput], {
    nullable: false
  })
  data!: Delivery_timeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
