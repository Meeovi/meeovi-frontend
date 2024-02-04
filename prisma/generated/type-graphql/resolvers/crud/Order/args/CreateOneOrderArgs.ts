import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderCreateInput } from "../../../inputs/OrderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrderArgs {
  @TypeGraphQL.Field(_type => OrderCreateInput, {
    nullable: false
  })
  data!: OrderCreateInput;
}
