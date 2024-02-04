import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManySalutationInputEnvelope } from "../inputs/Order_customerCreateManySalutationInputEnvelope";
import { Order_customerCreateOrConnectWithoutSalutationInput } from "../inputs/Order_customerCreateOrConnectWithoutSalutationInput";
import { Order_customerCreateWithoutSalutationInput } from "../inputs/Order_customerCreateWithoutSalutationInput";
import { Order_customerScalarWhereInput } from "../inputs/Order_customerScalarWhereInput";
import { Order_customerUpdateManyWithWhereWithoutSalutationInput } from "../inputs/Order_customerUpdateManyWithWhereWithoutSalutationInput";
import { Order_customerUpdateWithWhereUniqueWithoutSalutationInput } from "../inputs/Order_customerUpdateWithWhereUniqueWithoutSalutationInput";
import { Order_customerUpsertWithWhereUniqueWithoutSalutationInput } from "../inputs/Order_customerUpsertWithWhereUniqueWithoutSalutationInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpdateManyWithoutSalutationNestedInput", {})
export class Order_customerUpdateManyWithoutSalutationNestedInput {
  @TypeGraphQL.Field(_type => [Order_customerCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Order_customerCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Order_customerCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpsertWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  upsert?: Order_customerUpsertWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Order_customerCreateManySalutationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_customerUpdateWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  update?: Order_customerUpdateWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpdateManyWithWhereWithoutSalutationInput], {
    nullable: true
  })
  updateMany?: Order_customerUpdateManyWithWhereWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_customerScalarWhereInput[] | undefined;
}
