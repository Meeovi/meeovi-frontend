import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManySales_channelInputEnvelope } from "../inputs/Newsletter_recipientCreateManySales_channelInputEnvelope";
import { Newsletter_recipientCreateOrConnectWithoutSales_channelInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutSales_channelInput";
import { Newsletter_recipientCreateWithoutSales_channelInput } from "../inputs/Newsletter_recipientCreateWithoutSales_channelInput";
import { Newsletter_recipientScalarWhereInput } from "../inputs/Newsletter_recipientScalarWhereInput";
import { Newsletter_recipientUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Newsletter_recipientUpdateManyWithWhereWithoutSales_channelInput";
import { Newsletter_recipientUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Newsletter_recipientUpdateWithWhereUniqueWithoutSales_channelInput";
import { Newsletter_recipientUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Newsletter_recipientUpsertWithWhereUniqueWithoutSales_channelInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateManyWithoutSales_channelNestedInput", {})
export class Newsletter_recipientUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Newsletter_recipientUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipientCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  set?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  delete?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Newsletter_recipientUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Newsletter_recipientUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Newsletter_recipientScalarWhereInput[] | undefined;
}
