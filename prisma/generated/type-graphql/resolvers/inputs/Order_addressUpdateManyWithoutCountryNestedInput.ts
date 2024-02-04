import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManyCountryInputEnvelope } from "../inputs/Order_addressCreateManyCountryInputEnvelope";
import { Order_addressCreateOrConnectWithoutCountryInput } from "../inputs/Order_addressCreateOrConnectWithoutCountryInput";
import { Order_addressCreateWithoutCountryInput } from "../inputs/Order_addressCreateWithoutCountryInput";
import { Order_addressScalarWhereInput } from "../inputs/Order_addressScalarWhereInput";
import { Order_addressUpdateManyWithWhereWithoutCountryInput } from "../inputs/Order_addressUpdateManyWithWhereWithoutCountryInput";
import { Order_addressUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/Order_addressUpdateWithWhereUniqueWithoutCountryInput";
import { Order_addressUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/Order_addressUpsertWithWhereUniqueWithoutCountryInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateManyWithoutCountryNestedInput", {})
export class Order_addressUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: Order_addressUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  set?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: Order_addressUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: Order_addressUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_addressScalarWhereInput[] | undefined;
}
