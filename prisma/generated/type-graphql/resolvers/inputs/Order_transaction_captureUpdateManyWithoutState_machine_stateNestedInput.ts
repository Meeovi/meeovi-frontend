import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateManyState_machine_stateInputEnvelope } from "../inputs/Order_transaction_captureCreateManyState_machine_stateInputEnvelope";
import { Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput";
import { Order_transaction_captureCreateWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureCreateWithoutState_machine_stateInput";
import { Order_transaction_captureScalarWhereInput } from "../inputs/Order_transaction_captureScalarWhereInput";
import { Order_transaction_captureUpdateManyWithWhereWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureUpdateManyWithWhereWithoutState_machine_stateInput";
import { Order_transaction_captureUpdateWithWhereUniqueWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureUpdateWithWhereUniqueWithoutState_machine_stateInput";
import { Order_transaction_captureUpsertWithWhereUniqueWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureUpsertWithWhereUniqueWithoutState_machine_stateInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureUpdateManyWithoutState_machine_stateNestedInput", {})
export class Order_transaction_captureUpdateManyWithoutState_machine_stateNestedInput {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateWithoutState_machine_stateInput], {
    nullable: true
  })
  create?: Order_transaction_captureCreateWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureUpsertWithWhereUniqueWithoutState_machine_stateInput], {
    nullable: true
  })
  upsert?: Order_transaction_captureUpsertWithWhereUniqueWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateManyState_machine_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_captureCreateManyState_machine_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  set?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_captureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureUpdateWithWhereUniqueWithoutState_machine_stateInput], {
    nullable: true
  })
  update?: Order_transaction_captureUpdateWithWhereUniqueWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureUpdateManyWithWhereWithoutState_machine_stateInput], {
    nullable: true
  })
  updateMany?: Order_transaction_captureUpdateManyWithWhereWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transaction_captureScalarWhereInput[] | undefined;
}
