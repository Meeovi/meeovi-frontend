import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryCreateManyInput } from "../../../inputs/Order_deliveryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateManyInput], {
    nullable: false
  })
  data!: Order_deliveryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
