import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManyOrderInputEnvelope } from "../inputs/Order_addressCreateManyOrderInputEnvelope";
import { Order_addressCreateOrConnectWithoutOrderInput } from "../inputs/Order_addressCreateOrConnectWithoutOrderInput";
import { Order_addressCreateWithoutOrderInput } from "../inputs/Order_addressCreateWithoutOrderInput";
import { Order_addressScalarWhereInput } from "../inputs/Order_addressScalarWhereInput";
import { Order_addressUpdateManyWithWhereWithoutOrderInput } from "../inputs/Order_addressUpdateManyWithWhereWithoutOrderInput";
import { Order_addressUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Order_addressUpdateWithWhereUniqueWithoutOrderInput";
import { Order_addressUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Order_addressUpsertWithWhereUniqueWithoutOrderInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateManyWithoutOrderNestedInput", {})
export class Order_addressUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Order_addressUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManyOrderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_addressUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Order_addressUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Order_addressUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_addressScalarWhereInput[] | undefined;
}
