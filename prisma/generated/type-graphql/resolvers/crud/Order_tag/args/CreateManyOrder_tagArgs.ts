import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_tagCreateManyInput } from "../../../inputs/Order_tagCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrder_tagArgs {
  @TypeGraphQL.Field(_type => [Order_tagCreateManyInput], {
    nullable: false
  })
  data!: Order_tagCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
