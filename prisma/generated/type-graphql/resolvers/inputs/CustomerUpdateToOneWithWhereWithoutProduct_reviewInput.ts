import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutProduct_reviewInput } from "../inputs/CustomerUpdateWithoutProduct_reviewInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutProduct_reviewInput", {})
export class CustomerUpdateToOneWithWhereWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutProduct_reviewInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutProduct_reviewInput;
}
