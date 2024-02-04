import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_customerCreateManyInput } from "../../../inputs/Order_customerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_customerArgs {
  @TypeGraphQL.Field(_type => [Order_customerCreateManyInput], {
    nullable: false
  })
  data!: Order_customerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
