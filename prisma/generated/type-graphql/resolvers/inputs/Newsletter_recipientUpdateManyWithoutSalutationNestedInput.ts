import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManySalutationInputEnvelope } from "../inputs/Newsletter_recipientCreateManySalutationInputEnvelope";
import { Newsletter_recipientCreateOrConnectWithoutSalutationInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutSalutationInput";
import { Newsletter_recipientCreateWithoutSalutationInput } from "../inputs/Newsletter_recipientCreateWithoutSalutationInput";
import { Newsletter_recipientScalarWhereInput } from "../inputs/Newsletter_recipientScalarWhereInput";
import { Newsletter_recipientUpdateManyWithWhereWithoutSalutationInput } from "../inputs/Newsletter_recipientUpdateManyWithWhereWithoutSalutationInput";
import { Newsletter_recipientUpdateWithWhereUniqueWithoutSalutationInput } from "../inputs/Newsletter_recipientUpdateWithWhereUniqueWithoutSalutationInput";
import { Newsletter_recipientUpsertWithWhereUniqueWithoutSalutationInput } from "../inputs/Newsletter_recipientUpsertWithWhereUniqueWithoutSalutationInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateManyWithoutSalutationNestedInput", {})
export class Newsletter_recipientUpdateManyWithoutSalutationNestedInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpsertWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  upsert?: Newsletter_recipientUpsertWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipientCreateManySalutationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpdateWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  update?: Newsletter_recipientUpdateWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientUpdateManyWithWhereWithoutSalutationInput], {
    nullable: true
  })
  updateMany?: Newsletter_recipientUpdateManyWithWhereWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Newsletter_recipientScalarWhereInput[] | undefined;
}
