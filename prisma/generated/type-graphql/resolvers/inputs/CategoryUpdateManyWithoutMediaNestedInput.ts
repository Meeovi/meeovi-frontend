import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyMediaInputEnvelope } from "../inputs/CategoryCreateManyMediaInputEnvelope";
import { CategoryCreateOrConnectWithoutMediaInput } from "../inputs/CategoryCreateOrConnectWithoutMediaInput";
import { CategoryCreateWithoutMediaInput } from "../inputs/CategoryCreateWithoutMediaInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutMediaInput } from "../inputs/CategoryUpdateManyWithWhereWithoutMediaInput";
import { CategoryUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutMediaInput";
import { CategoryUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutMediaInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutMediaNestedInput", {})
export class CategoryUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutMediaInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
