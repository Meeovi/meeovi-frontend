import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutProduct_reviewInput } from "../inputs/CustomerCreateWithoutProduct_reviewInput";
import { CustomerUpdateWithoutProduct_reviewInput } from "../inputs/CustomerUpdateWithoutProduct_reviewInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutProduct_reviewInput", {})
export class CustomerUpsertWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutProduct_reviewInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutProduct_reviewInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
