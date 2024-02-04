import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressCreateManyInput } from "../../../inputs/Order_addressCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_addressArgs {
  @TypeGraphQL.Field(_type => [Order_addressCreateManyInput], {
    nullable: false
  })
  data!: Order_addressCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
