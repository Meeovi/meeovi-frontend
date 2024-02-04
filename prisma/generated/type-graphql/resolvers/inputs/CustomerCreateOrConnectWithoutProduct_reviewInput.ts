import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutProduct_reviewInput } from "../inputs/CustomerCreateWithoutProduct_reviewInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutProduct_reviewInput", {})
export class CustomerCreateOrConnectWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutProduct_reviewInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutProduct_reviewInput;
}
