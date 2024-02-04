import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateManyTagInputEnvelope } from "../inputs/Customer_tagCreateManyTagInputEnvelope";
import { Customer_tagCreateOrConnectWithoutTagInput } from "../inputs/Customer_tagCreateOrConnectWithoutTagInput";
import { Customer_tagCreateWithoutTagInput } from "../inputs/Customer_tagCreateWithoutTagInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagCreateNestedManyWithoutTagInput", {})
export class Customer_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Customer_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Customer_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Customer_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_tagWhereUniqueInput[] | undefined;
}
