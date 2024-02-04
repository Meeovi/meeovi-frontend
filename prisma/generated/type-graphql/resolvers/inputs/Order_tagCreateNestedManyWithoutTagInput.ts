import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateManyTagInputEnvelope } from "../inputs/Order_tagCreateManyTagInputEnvelope";
import { Order_tagCreateOrConnectWithoutTagInput } from "../inputs/Order_tagCreateOrConnectWithoutTagInput";
import { Order_tagCreateWithoutTagInput } from "../inputs/Order_tagCreateWithoutTagInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagCreateNestedManyWithoutTagInput", {})
export class Order_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Order_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Order_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Order_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Order_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_tagWhereUniqueInput[] | undefined;
}
