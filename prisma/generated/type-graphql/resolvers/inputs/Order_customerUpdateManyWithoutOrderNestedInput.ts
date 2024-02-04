import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManyOrderInputEnvelope } from "../inputs/Order_customerCreateManyOrderInputEnvelope";
import { Order_customerCreateOrConnectWithoutOrderInput } from "../inputs/Order_customerCreateOrConnectWithoutOrderInput";
import { Order_customerCreateWithoutOrderInput } from "../inputs/Order_customerCreateWithoutOrderInput";
import { Order_customerScalarWhereInput } from "../inputs/Order_customerScalarWhereInput";
import { Order_customerUpdateManyWithWhereWithoutOrderInput } from "../inputs/Order_customerUpdateManyWithWhereWithoutOrderInput";
import { Order_customerUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Order_customerUpdateWithWhereUniqueWithoutOrderInput";
import { Order_customerUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Order_customerUpsertWithWhereUniqueWithoutOrderInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpdateManyWithoutOrderNestedInput", {})
export class Order_customerUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Order_customerCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_customerCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_customerCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Order_customerUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_customerCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  set?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Order_customerUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Order_customerUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_customerScalarWhereInput[] | undefined;
}
