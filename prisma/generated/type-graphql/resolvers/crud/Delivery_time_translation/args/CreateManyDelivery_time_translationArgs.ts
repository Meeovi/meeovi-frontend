import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationCreateManyInput } from "../../../inputs/Delivery_time_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateManyInput], {
    nullable: false
  })
  data!: Delivery_time_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
