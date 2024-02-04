import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutOrder_customerInput } from "../inputs/CustomerUpdateWithoutOrder_customerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutOrder_customerInput", {})
export class CustomerUpdateToOneWithWhereWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutOrder_customerInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutOrder_customerInput;
}
